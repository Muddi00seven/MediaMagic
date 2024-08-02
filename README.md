Sure, here's an updated `README.md` based on your provided information:

---

# MediaMagic

MediaMagic is a versatile media processing library for Next.js and React applications. With a single command, you can convert PNG images to WebP, update image imports throughout your codebase, and perform various other media transformations. Future features will include converting MP4 videos to WebM, deleting unused images from the code, and selective image conversions to other formats like PNG to JPEG.

## Features

- **Convert Images**: Convert PNG images to WebP format.
- **Update Imports**: Automatically update image imports in your codebase from PNG to WebP.
- **Recursive Processing**: Process all images and imports in specified directories.
- **Future Capabilities**:
  - Convert MP4 videos to WebM.
  - Delete unused images from the codebase.
  - Selective image conversions to other formats (e.g., PNG to JPEG).
  - Compatibility with React applications.

## Installation

Install the library using npm:

```bash
npm install mediamagic
```

## Usage

1. Add a script to your `package.json` file:

```json
"scripts": {
  "process-media": "mediamagic"
}
```

2. Create a `mediamagic.config.js` file in the root of your project with the following configuration:

```javascript
module.exports = {
  srcDirectories: [
    'app',
    'src/components',
    'src/utils',
  ],
  publicFolder: 'public',
};
```

3. Run the script with the following command:

```bash
npm run process-media
```

## Benefits

- **Efficiency**: Save time by converting images and updating imports automatically.
- **Consistency**: Ensure all image imports are consistent across your codebase.
- **Future-Proof**: Prepare for future enhancements such as video conversion and unused image cleanup.

## Upcoming Features

- **Video Conversion**: Convert MP4 videos to WebM format.
- **Code Cleanup**: Delete unused images from your codebase.
- **Selective Conversions**: Convert specific images to other formats like PNG to JPEG.
- **React Compatibility**: Ensure compatibility with React applications.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

This `README.md` provides an overview of your library, instructions on how to install and use it, the benefits it offers, and upcoming features.