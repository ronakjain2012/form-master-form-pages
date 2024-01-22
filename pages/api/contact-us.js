
export default function handler(req, res) {
    if (req.method == 'POST') {
        const body = req.body
        
        res.status(200).send(body)
        return
    } else
        res.status(200).json({ message: 'Hello from Ronak Bokaria (ronakjain2012)' })
}