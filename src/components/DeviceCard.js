import { Card, CardContent, Typography } from '@material-ui/core'
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
function DeviceCard({ data, handleDelete }) {

    return (
        <div>
            {/* <Card elevation={5} >
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(data.Imei)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={data.Devicename}
                    subheader={data.Imei}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        Name : {data.Farmername}<br></br>
                        Farmer Contact : {data.Farmercontact}
                    </Typography>
                </CardContent>
            </Card> */}

            <Card
                style={{
                    width: 180,
                    backgroundColor: "yellow",
                }}
            >
                <CardContent >
                    <Typography variant="h6" >
                        {/* <Typography
                        style={{ fontSize: 14 }}
                        color="textSecondary"
                        gutterBottom
                    > */}
                        {data.Devicename}
                    </Typography>
                    <Typography gutterBottom style={{ fontSize: 14 }}>
                        {data.Imei}
                    </Typography>
                    <Typography
                        style={{
                            marginTop: 30,
                        }}
                    >
                        {data.Farmername}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.Farmercontact}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        color="primary"
                        variant="contained"

                        size="small">Edit..</Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => handleDelete(data.Imei)}
                        size="small">Delete!!</Button>
                </CardActions >
            </Card>


        </div>
    )
}

export default DeviceCard