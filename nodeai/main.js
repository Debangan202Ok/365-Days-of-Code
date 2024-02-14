const mic = require("mic");
const fs = require("fs");

const audioConfig = {
  r: 16000,
  c: "1",
};
const micInstance = mic({
  r: audioConfig.r,
  c: audioConfig.c,
  debug: false,
  exitOnSilence: 6,
});

const micInputStream = micInstance.getAudioStream();

const filename = "output.raw";
const outputFileStream = fs.WriteStream(filename);

micInputStream.pipe(outputFileStream);

micInputStream.on("startComplete", () => {
  console.log("start recording");
  setTimeout(() => {
    micInstance.pause();
    console.log(`recored complete`);
    console.log(`to listen it run:`);
    process.exit(0);
  }, 15000);
});

micInstance.start();
