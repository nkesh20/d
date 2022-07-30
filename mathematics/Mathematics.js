/*
    ეს ფუნქცია ინფუთად იღებს კვადრატული განტოლების წევრების კოეფიციენტებს, ითვლის დისკრიმინანტსა და პარაბოლის წვეროს კოორდინატებს.
    შემდეგ, იმ შემთხვევაში, თუ დისკრიმინანტი მეტია ან ტოლი ნულზე, გამოაქვს დისკრიმინანტი, ფესვები და წვეროს კოორდინატები.
    თუ დისკრიმინანტი ნულზე ნაკლებია, გამოაქვს დისკრიმინანტი, წვეროს კოორდინატები და ინფორმაცია, რომ განტოლებას ფესვები არ აქვს.
*/

function quadraticEquation() {
    let root1, root2;

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let output = document.getElementById("output");
    
    let discriminant = b * b - 4 * a * c;
    let y0 = -discriminant / (4 * a);
    let x0 = -b / (2 * a);
    
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        output.innerText = "დისკრიმინანტი: " + discriminant 
                            + "\nფესვები: " + root1 + ", " + root2 
                            + "\ny0 = " + y0 
                            + "\nx0 = " + x0;       
    }
    
    else if (discriminant == 0) {
        root1 = root2 = -b / (2 * a);
        output.innerText = "დისკრიმინანტი: " + discriminant 
                            + "\nფესვები: " + root1 
                            + "\ny0 = " + y0 
                            + "\nx0 = " + x0;  
    } 
    
    else if(discriminant < 0) {
        output.innerText = "დისკრიმინანტი: " + discriminant 
                            + "\nფესვები: არ აქვს." 
                            + "\ny0 = " + y0 
                            + "\nx0 = " + x0;  
    }

    
    
}


/*
    ეს ფუნქცია ინფუთად იღებს სამკუთხედის გვერდების სიგრძეებს. იმ შემთხვევაში, თუ ასეთი სამკუთხედი არ არსებობს, გამოაქვს შესაბამისი მესიჯი.
    სხვა შემთხვევაში, ითვლის პერიმეტრს, ჰერონის ფორმულის დახმარებით ფართობს და შემდგომ ფართობისა და გვერდების დახმარებით ამ გვერდებზე დაშვებულ სიმაღლეებს.
*/
function triangle() {
    let a = Number(document.getElementById("side1").value);
    let b = Number(document.getElementById("side2").value);
    let c = Number(document.getElementById("side3").value);
    let output = document.getElementById("triangleOutput");

    if( ((a+b) < c) || ((a+c) < b) || ((b+c) < a)) {
        output.innerText = "ასეთი სამკუთხედი არ არსებობს. შეამოწმეთ გვერდების სიგრძეები."
    } else {
        let perimeter = a + b + c;
        let halfPerimeter = perimeter / 2;
        let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c));
        let height1 = (2 * area) / a;
        let height2 = (2 * area) / b;
        let height3 = (2 * area) / c;
        output.innerText = "პერიმეტრი: " + perimeter 
                            + "\nფართობი: " + area 
                            + "\nპირველ გვერდზე დაშვებული სიმაღლე: " + height1
                            + "\nმეორე გვერდზე დაშვებული სიმაღლე: " + height2
                            + "\nმესამე გვერდზე დაშვებული სიმაღლე:" + height3;


    }
    

}


