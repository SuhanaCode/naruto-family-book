var images = ["Minato_Namikaze.png" , "kushina.png" , "naruto_as_hokage.png" , "hinata.png" , "boruto.png" , "Himawari.webp" , "Neji_full.webp" , "hah.jpg"];
var names = ["Minato(GrandFather)" , "Kushina(GrandMother)" , "Naruto(Father)" , "Hinata(Mother)" , "Boruto(Son)" , "Himawari(Daughter)" , "Neji(Brother of Mother)" , "Hanabi(Sister of Mother)"];
var i = 0;

function update()
{
    i++;
    var numbers_of_family_member_in_array = 7
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    var updatedImage = images[i];
    var updatedName = names[i];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}