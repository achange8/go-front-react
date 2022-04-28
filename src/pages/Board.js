import moment from 'moment';

function Board({NUM,TITLE,WRITER,HITCOUNT,CreactAt}){
    let time  =moment(CreactAt).format('YYYY年MM月DD日 HH:mm');
    
    
    return(
    <div>
        <div className="border"> {NUM} : <a href={`/view/${NUM}`}>{TITLE}</a> : {WRITER} : {time} : {HITCOUNT}</div>
    </div>
    )
}

export default Board;