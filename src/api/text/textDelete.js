import { textList } from "../../pages/home.js";

export function textDelete(req, res) {
    const text = textList[req.params.index];
    if (typeof text === 'string') {
        textList.splice(req.params.index, 1)


        return res.json ({
            status: 'success',
            msg: 'Textas sekmingai istrintas',
        });
    }
    
        return res.json ({
            status: 'error',
            msg: 'Norimas tekstas neistrintas, nes neegzistuoja, arba neteisingas inex',
        });
}