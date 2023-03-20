// Streams

// Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js there are four types of streams-

// Streaming means listening to music or watching video in'real time',instead of downloading a file to your computer and watching it later.

// Readable - Stream which is used for read operation. ex-fs.read
// Writable - Stream which is used for write operation.ex-fs.write
// Duplex - Stream which is used for both read and write.ex-sockets
// Transform - A type of duplex stream where the output is computed based on input.

// Each type of stream is an EventEmitter instance and throws several events at different instance of times.For example, some of the commonly used events are-

// data - This event is fired when there is data available to read.
// end - This event is fired when there is no more data to read.
// error - This event is fired when there is any error receiving or writing data.
// finish - This event is fired when all the data has been flushed to underlying system.

const fs = require("fs");
const http = require("http");
const { Readable } = require("stream");

const server = http.createServer();

server.on("request", (req, res) => {
  var fs = require("fs");
  // fs.readFile("input.txt", function(err,data){
  //     console.log(data);
  //     if(err) return console.error(err);
  //     res.end(data.toString())
  // });

  // 2nd way
  // Reading from a stream
  // Create a readable stream
  // Handle stream events - data , end and error

  const rstream = fs.createReadStream("input.txt");
//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });

//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end("file not found");
//   });

// 3rd way
//   stream pipline() method
// stream.pipe(), the method used to take a readable stream and connect it to a writeable stream.
// readable.pipe() method attaches a writeable stream to a readable .
// Readable.pipeline(destination,[optional])
// destination :-it is for writing data 
// Optional parameter contatin end  which is use for end the writer when the reader ends.

  rstream.pipe(res)

//   maintain the flow of read and write
// it increase efficiency
});

server.listen(8000, () => {
  console.log(`listening to the port no 8000`);
});