import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors(
    {origin:[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://localhost:5174"],
        credentials:true,
        allowedHeaders:["Content-Type", "Authorization"]
    }
))

app.get("/api/message", (req, res) => {
    res.json({message:"Hello from server!"})
})

const PORT = 4000 

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})