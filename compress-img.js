import { compressImages } from "@cresteem/minomax";

class Compress {
	favicons() {
		// compress favicons
		compressImages("public/favicons/*png", "webp", "compressed").catch(
			console.error,
		);
	}

	otherImages() {
		// compress all svg
		compressImages(
			"public/src/*jpg",
			"webp",
			"compressed",
			"public/src/testimonial-users",
		).catch(console.error);
	}

	serviceImages() {
		// compress service visuals
		compressImages(
			"public/src/testimonial-users/*{jpg,png}",
			"webp",
			"compressed",
		).catch(console.error);
	}

	brandAssets() {
		// compress brand-assets non-svg
		compressImages(
			"public/brand-assets/*{png,webp}",
			"webp",
			"compressed",
		).catch(console.error);
	}
}

new Compress().otherImages();
