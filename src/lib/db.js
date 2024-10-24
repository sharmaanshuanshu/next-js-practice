const {uname, upwd} = process.env;
export const connectionStr = "mongodb+srv://"+uname+":"+upwd+"@cluster0.g85vm.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0";