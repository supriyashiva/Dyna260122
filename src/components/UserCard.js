import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import db from '../firebase'

function UserCard({ data, handleDelete }) {


    return (
        <div>
            <Card elevation={1} >
                <CardHeader
                    action={
                        <IconButton onClick={() => handleDelete(data.UserName)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={data.UserName}
                    subheader={data.EmailId}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {data.Password}<br />
                        {data.Entity}<br />
                        {data.Role}

                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default UserCard