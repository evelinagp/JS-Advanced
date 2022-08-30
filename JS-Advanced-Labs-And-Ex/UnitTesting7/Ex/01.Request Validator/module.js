function fn(object) {
    const validMethods = ["GET", "POST", "DELETE", "CONNECT"];
    const validVersions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    const uriRegex = /(^[\w.]+$)/;
    const messageTest = /([<>\\&'"])/;

    if (!object.method || !validMethods.includes(object.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }
    if (!object.uri || object.uri == "" || !uriRegex.test(object.uri)) {
        throw new Error("Invalid request header: Invalid URI");
    }
    if (!object.version || !validVersions.includes(object.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    if (object.message == undefined || messageTest.test(object.message)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return object;
}