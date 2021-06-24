import {articles} from '../../../data';


export default function handler({querry: {id}}, res) {
  
    const filtered = articles.filter(articles => articles.id === id)
    if(filtered.lenght> 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({message:`Article with ${id} is not found`})
    }
}