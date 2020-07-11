import axios from 'axios';

const api =axios.create({
    baseURL: 'http://192.168.100.74:3333'
});
/*

  {items.map(item=>(

                      <TouchableOpacity key={String(item.id)} style={styles.item} onPress={()=>{}}>
                      <SvgUri width={42} height={42} uri="item.image_url"/>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                  </TouchableOpacity>
                  
                    ))}



*/
export default api;