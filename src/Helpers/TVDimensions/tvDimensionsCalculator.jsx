export function tvDimensionsCalculator(tvSizes){
    let tvDimensionsInches = tvSizes.availableSizes;

    let tvDimensions = '';

    for (let i = 0; i < tvSizes.availableSizes.length; i++) {
        let size = tvDimensionsInches;
        let cm = Math.round(size[i] * 2.54);

        tvDimensions += `${size[i]} inches (${cm}cm)`;

        if (i !== tvDimensionsInches.length - 1) {
            tvDimensions += ' | ';
        }

    }
    return tvDimensions;
}

