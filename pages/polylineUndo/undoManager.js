class undoManager{
    constructor(){
        pileUndo = new Stack();
    }
    execute(commande){
        pileUndo
        commande.execute();
    }
    undo(){
        commande =
        commande.undo();
    }
}

undoManager = new undoManager();

const undoButton
    click -> {
        undoManager.undo();
    }
