const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// اختبار الاتصال بـ API وسيرفر الخادم
app.get('/', (req, res) => {
  res.json({ message: 'مرحباً بك في خادم منصة ملعبنا (Malaabuna) يعمل بنجاح!' });
});

app.listen(PORT, () => {
  console.log(`السيرفر يعمل الآن على المنفذ: ${PORT}`);
});