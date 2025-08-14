const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const Razorpay = require("razorpay")
const ConnectedDB = require("./LinkDatabase");
const ImageSave = require("./SellerSchema");

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");


const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
ConnectedDB();

// ====== Cloudinary Config ======
cloudinary.config({
  cloud_name: "da1n2zgdn",
  api_key: "262676543758431",
  api_secret: "XcOUm9idoyTiw0Z2my55Ai3eqHU",
});

// ====== Multer Storage with Cloudinary ======
const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => ({
    folder: "uploads",
    public_id: `${Date.now()}-${path.parse(file.originalname).name}`,
    resource_type: "image",
  }),
});

const upload = multer({ storage });

// ====== POST /upload ======
app.post("/PostedProduct", upload.single("image"), async (req, res) => {
  try {
    // Read values regardless of case
    const title = req.body.title || req.body.Title;
    const description = req.body.description || req.body.Description;
    const price = req.body.price || req.body.Price;

    const imageUrl = req.file?.path; // multer-storage-cloudinary sets this

    if (!title || !description || !price || !imageUrl) {
      return res.status(400).json({
        error: "Title, Description, Price, and image are required",
      });
    }

    const newImage = new ImageSave({
      Title: title,
      Description: description,
      Price: price,
      image: imageUrl,
    });

    await newImage.save();

    res.json({
      message: "✅ Data saved to Cloudinary & MongoDB",
      data: newImage,
    });
  } catch (err) {
    console.error("❌ Save error:", err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

// ====== GET /products ======
app.get("/PostedProducts", async (req, res) => {
  try {
    const products = await ImageSave.find();
    res.json(products);
  } catch (err) {
    console.error("❌ Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});


// Payment Post Integration

const razorPay = new Razorpay({
  key_id:"rzp_test_R5AAl5ZdPJ2r4d",
  key_secret:"ZAO3Ov23SSid5SS0kpm3EWky"
})

app.post("/create-order", async(req,res)=>{
const {amount} = req.body;
const Options = {
  amount: amount,
  currency: "INR",
  receipt: "order_rcptid_11"
};
try{
  const order = await razorPay.orders.create(Options);
  res.json(order)
}
catch(err){
res.status(500).send(err)
}
})


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
