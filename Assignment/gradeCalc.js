function gradeCalculation(mark){
    switch(true){
        case mark>=90:
            return "Grade A";
            break;
        case mark >=80 && mark <90:
            return "Grade B";
            break;
        case mark >=50 && mark <80:
            return "Grade C";
            break;
        case mark <50:
            return "Grade D";
            break;
}
}
console.log("Secured Grade based on Marks Obtained is :"+gradeCalculation(94));