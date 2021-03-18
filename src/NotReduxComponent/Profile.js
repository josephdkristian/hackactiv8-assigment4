import { Avatar, Card } from "antd";
import { useEffect, useState } from "react";
import { ActionButton } from "./ChildActions/Index";
const { Meta } = Card;

const Profile = (props) =>  {
  const [enabler, setEnabler] = useState(false);
  useEffect(() => {
    switch (props.children){
      case 'Ahmad Anan R':
        setEnabler({ ellipsis: false, setting:false, edit:true}); 
        break;
      case 'Bebas':
        setEnabler({ ellipsis: true, setting:false, edit:true});
        break;
      case 'Korona':
        setEnabler({ ellipsis: true, setting:true, edit:true});
        break;
        default:
          setEnabler(false);
    }
  }, [])
  
  return (
    <Card
      title={props.children}
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={ActionButton(enabler)}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}

export default Profile;
