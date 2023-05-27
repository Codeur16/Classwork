 class question{
        id: number;
        Enonce:String;
        Reponse:String;
        Type:String;
        PointQuestion:number;
        choix?:Array<string>;

        constructor(
            id: number,
            Enonce:String='',
            Reponse:String='',
            Type:String='',
            PointQuestion:number,
            choix:Array<string>=['']
        ){
            this.id=id;
            this.Enonce=Enonce;
            this.Reponse=Reponse;
            this.Type=Type;
            this.PointQuestion=PointQuestion;
            this.choix=choix;
        }
}

class questionnaire{

    chapitre: String;
    nombreDeQuestions: number;
    questions:question[];
    constructor(
       
        chapitre:String='',
        nombreDeQuestions:number=0,
        questions: question[] = []
    ){
        this.chapitre = chapitre;
        this.nombreDeQuestions = nombreDeQuestions;
        this.questions= questions; 

    }
     
}

export {question, questionnaire};