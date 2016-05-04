import UnityEngine.UI;
var startingHealth : int = 100;
var currentHealth : int;
var healthSlider : Slider;
var damageImage : Image;
var flashSpeed : float= 5f;
var flashColour : Color = new Color(1f, 0f, 0f, 0.1f);



private var shootingScript : ShootingDamage;                          
private var isDead : boolean;
private var damaged : boolean;


function Awake ()
{
    
    anim = GetComponent (Animator);
 
    shootingScript = GetComponentInChildren (ShootingDamage);


    currentHealth = startingHealth;
}


function Update ()
{
    
    if(damaged)
    {
        
        damageImage.color = flashColour; //set image color 
    }

    else
    {
        damageImage.color = Color.Lerp (damageImage.color, Color.clear, flashSpeed * Time.deltaTime); //set color back to clear
    }

  
    damaged = false;
}


public function TakeDamage (amount : int)
{
    
    damaged = true;


    currentHealth -= amount;


    healthSlider.value = currentHealth;



    if(currentHealth <= 0 && !isDead)
    {
        Death ();
    }
}


function Death ()
{
    isDead = true;


    shootingScript.DisableEffects ();
    shootingScript.enabled = false;

}