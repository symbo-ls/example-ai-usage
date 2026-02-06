// File schema and manifest
// All files managed via Symbols SDK - do NOT add manually
//
// To add a file:
// 1. Use Symbols SDK: const result = await symbols.files.upload(file)
// 2. Receive response with file metadata and download URL
// 3. Add entry below using SDK response structure:
//    {
//      key: 'fileName',
//      type: 'file',
//      format: 'png|jpg|svg|etc',
//      content: {
//        src: 'https://api.symbols.app/...',
//        filename: 'original-filename.png',
//        size: 12345,
//        mimeType: 'image/png',
//      },
//      code: '',  // Optional metadata
//    }
//
// Schema structure:
// Each entry represents an uploaded file with metadata from Symbols platform
// content.src - Direct download URL from Symbols API
// key - Unique identifier for referencing in components
// format - File type (png, jpg, svg, webp, etc)
// type - Asset type ('file' for standard files, 'files' for complex objects)

export default {
  "Arbitrum.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/689afdd763c13d9548d7710e/download",
    },
    code: "",
    key: "Arbitrum.png",
    type: "file",
    format: "png",
  },
  "CRO.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/689afde063c13d9548d77129/download",
    },
    code: "",
    key: "CRO.png",
    type: "file",
    format: "png",
  },
  "Aptos.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/689afde863c13d9548d771b1/download",
    },
    code: "",
    key: "Aptos.png",
    type: "file",
    format: "png",
  },
  "Allora.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30df9f65883b039b9dbea/download",
    },
    code: "",
    key: "Allora.png",
    type: "file",
    format: "jpg",
  },
  "Eth2.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30edbf65883b039b9de92/download",
    },
    code: "",
    key: "Eth2.png",
    type: "file",
    format: "png",
  },
  "Chromia.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30eaff65883b039b9dd79/download",
    },
    code: "",
    key: "Chromia.png",
    type: "file",
    format: "png",
  },
  "Canton.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30e38f65883b039b9dc64/download",
    },
    code: "",
    key: "Canton.png",
    type: "file",
    format: "jpg",
  },
  "Polygon.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a310bef65883b039b9e3be/download",
    },
    code: "",
    key: "Polygon.png",
    type: "file",
    format: "svg",
  },
  "Haven1.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30efbf65883b039b9deff/download",
    },
    code: "",
    key: "Haven1.png",
    type: "file",
    format: "jpg",
  },
  "Pharos.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a310a8f65883b039b9e365/download",
    },
    code: "",
    key: "Pharos.png",
    type: "file",
    format: "jpg",
  },
  "Nillion.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30fcbf65883b039b9e13d/download",
    },
    code: "",
    key: "Nillion.png",
    type: "file",
    format: "jpg",
  },
  "Near.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30fb6f65883b039b9e0e8/download",
    },
    code: "",
    key: "Near.png",
    type: "file",
    format: "webp",
  },
  "Story.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a311abf65883b039b9e5eb/download",
    },
    code: "",
    key: "Story.png",
    type: "file",
    format: "png",
  },
  "Solana.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31112f65883b039b9e4d9/download",
    },
    code: "",
    key: "Solana.png",
    type: "file",
    format: "jpg",
  },
  "SXT.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a311dbf65883b039b9e6a5/download",
    },
    code: "",
    key: "SXT.png",
    type: "file",
    format: "jpg",
  },
  "Radix.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a310f4f65883b039b9e46e/download",
    },
    code: "",
    key: "Radix.png",
    type: "file",
    format: "jpg",
  },
  "Polymesh.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a310e2f65883b039b9e419/download",
    },
    code: "",
    key: "Polymesh.png",
    type: "file",
    format: "png",
  },
  "Supra.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a311c2f65883b039b9e642/download",
    },
    code: "",
    key: "Supra.png",
    type: "file",
    format: "webp",
  },
  "Tezos.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a311f2f65883b039b9e6fa/download",
    },
    code: "",
    key: "Tezos.png",
    type: "file",
    format: "png",
  },
  "Vanar.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31200f65883b039b9e74f/download",
    },
    code: "",
    key: "Vanar.png",
    type: "file",
    format: "png",
  },
  "Wemix.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31268f65883b039b9e843/download",
    },
    code: "",
    key: "Wemix.png",
    type: "file",
    format: "png",
  },
  "Zenrock.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31279f65883b039b9e8a0/download",
    },
    code: "",
    key: "Zenrock.png",
    type: "file",
    format: "jpg",
  },
  "Zetachain.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a3128af65883b039b9e903/download",
    },
    code: "",
    key: "Zetachain.png",
    type: "file",
    format: "png",
  },
  "Aleo.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30dbaf65883b039b9db1b/download",
    },
    code: "",
    key: "Aleo.png",
    type: "file",
    format: "jpg",
  },
  "Cardano.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30e7af65883b039b9dd06/download",
    },
    code: "",
    key: "Cardano.png",
    type: "file",
    format: "png",
  },
  "Ika.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30f3af65883b039b9df7d/download",
    },
    code: "",
    key: "Ika.png",
    type: "file",
    format: "jpg",
  },
  "Kaia.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30f64f65883b039b9dfd7/download",
    },
    code: "",
    key: "Kaia.png",
    type: "file",
    format: "png",
  },
  "Mantra.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30f7af65883b039b9e034/download",
    },
    code: "",
    key: "Mantra.png",
    type: "file",
    format: "jpg",
  },
  "Midnight.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a30f9bf65883b039b9e08f/download",
    },
    code: "",
    key: "Midnight.png",
    type: "file",
    format: "jpg",
  },
  "Somnia.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31127f65883b039b9e566/download",
    },
    code: "",
    key: "Somnia.png",
    type: "file",
    format: "png",
  },
  "Warden.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a31216f65883b039b9e79e/download",
    },
    code: "",
    key: "Warden.png",
    type: "file",
    format: "png",
  },
  "ZkCloud.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68a3129ef65883b039b9e958/download",
    },
    code: "",
    key: "ZkCloud.png",
    type: "file",
    format: "png",
  },
  "google.svg": {
    content: {
      src: "https://api.symbols.app/core/files/public/687723c00769df64f1a749e3/download",
    },
    code: "",
    key: "google.svg",
    type: "file",
    format: "svg",
  },
  "Autonity.png": {
    content: {
      src: "https://api.symbols.app/core/files/public/68959a0763c13d9548d20d48/download",
    },
    code: "",
    key: "autonity.png",
    type: "file",
    format: "png",
  },
  walrus: {
    content: {
      filename: "KC6luiJ-_wNASRFXds4Zc.png",
      originalName: "apple-touch-icon.png",
      mimeType: "image/png",
      size: 3380,
      storageUrl:
        "https://storage.googleapis.com/smbls-api-media/media/projects/6874baae0769df64f1a4484d/users/6868484c0cf470c5890933d5/KC6luiJ-_wNASRFXds4Zc.png",
      bucket: "smbls-api-media",
      category: "image",
      tags: [],
      uploadedBy: "6868484c0cf470c5890933d5",
      project: "6874baae0769df64f1a4484d",
      visibility: "public",
      status: "active",
      version: 1,
      downloadCount: 0,
      _id: "691722cceff651dd5dde3586",
      previousVersions: [],
      createdAt: "2025-11-14T12:38:36.273Z",
      updatedAt: "2025-11-14T12:38:36.273Z",
      __v: 0,
      extension: "png",
      humanSize: "3.3 KB",
      age: 55,
      id: "691722cceff651dd5dde3586",
      urls: {
        api: {
          base: "/core/files",
          file: "/core/files/691722cceff651dd5dde3586",
          download: "/core/files/public/691722cceff651dd5dde3586/download",
          publicDownload:
            "/core/files/public/691722cceff651dd5dde3586/download",
        },
        absolute: {
          base: "https://api.symbols.app/core/files",
          file: "https://api.symbols.app/core/files/691722cceff651dd5dde3586",
          download:
            "https://api.symbols.app/core/files/public/691722cceff651dd5dde3586/download",
          publicDownload:
            "https://api.symbols.app/core/files/public/691722cceff651dd5dde3586/download",
        },
        storage:
          "https://storage.googleapis.com/smbls-api-media/media/projects/6874baae0769df64f1a4484d/users/6868484c0cf470c5890933d5/KC6luiJ-_wNASRFXds4Zc.png",
      },
      src: "https://api.symbols.app/core/files/public/691722cceff651dd5dde3586/download",
    },
    code: "",
    key: "walrus",
    type: "files",
    format: "walrus",
  },
};
