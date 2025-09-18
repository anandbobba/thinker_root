import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";
dotenv.config();

export const s3Client = new S3Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

export const s3Config = {
    bucket: process.env.AWS_S3_BUCKET_NAME,
    region: process.env.AWS_REGION || "us-east-1"
};

export const generateFileName = (originalName) => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = originalName.split('.').pop();
    return `applications/${timestamp}-${randomString}.${fileExtension}`;
};

export const uploadToS3 = async (file) => {
    if (!file) return null;
    const fileName = generateFileName(file.originalname);
    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: s3Config.bucket,
            Key: fileName,
            Body: file.buffer,
            ContentType: file.mimetype
        }
    });

    await upload.done();
    return `https://${s3Config.bucket}.s3.${s3Config.region}.amazonaws.com/${fileName}`;
};

export const deleteFromS3 = async (fileUrl) => {
    if (!fileUrl) return;
    const key = fileUrl.split('.com/')[1];
    try {
        await s3Client.send(new DeleteObjectCommand({
            Bucket: s3Config.bucket,
            Key: key
        }));
    } catch (err) {
        console.error('S3 delete failed', err.message);
    }
};
