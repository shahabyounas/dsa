 function attachBodyTag() {
   return ((req, res, next) => {
        // Store the original send method
        const originalSend = res.send;
      
        // Override the send method
        res.send = function(body) {
          // Modify the body to include a body tag
          const modifiedBody = `<body>${JSON.stringify(body, null,2)}</body>`;
          // Call the original send method with the modified body
          originalSend.call(this, modifiedBody);
        };
      
        // Move to the next middleware or route handler
        next();
      });
}

module.exports = {
    attachBodyTag
}