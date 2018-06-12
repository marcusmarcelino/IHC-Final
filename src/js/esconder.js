function hide(e){
    var body = document.body;
    
    
    if (this.currentState)
        body.classList.add(this.cssClass);
    else
        body.classList.remove(this.cssClass);
};