# M4A to MP3 demonstration audio

Original synthetic five-second stereo tone: 440 Hz left and 660 Hz right,
amplitude 0.25, 44.1 kHz, AAC-LC at 128 kbit/s in an M4A container.
Contains no speech, personal recordings or third-party media.

The checked-in `.m4a` is served as a static asset. Normal builds, browser
conversion and deployment do not require FFmpeg. The optional developer
regeneration command is `FFMPEG_PATH=/path/to/ffmpeg node
scripts/tool-modules/generate-m4a-sample.mjs` (run from the repository root).
The generator intentionally refuses to overwrite an existing sample.
