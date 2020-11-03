module.exports = {
    concurrency: 1,
    // when running ci/cd cannot extract the env var, so we set them previously so the code can extract them
    apiKey: process.env.APPLITOOLS_API_KEY,
    //
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    // this is the most important line for cypress, we need the batchID since it will be the commit SHA
    batchId: process.env.APPLITOOLS_BATCH_ID
    

}