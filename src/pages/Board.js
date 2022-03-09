
function Board({NUM,TITLE,WRITER,HITCOUNT,CreactAt}){
    
    return(
    <div>
        <div> {NUM} : <a href={`/view/${NUM}`}>{TITLE}</a> : {WRITER} : {CreactAt} : {HITCOUNT}</div>
    </div>
    )
}

export default Board;