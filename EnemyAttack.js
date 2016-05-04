var timeBetweenAttacks : float = 0.5f;     // The time in seconds between each attack.
var attackDamage : int = 10;               // The amount of health taken away per attack.


private var anim : Animator;
private var player : GameObject;
private var playerHealth : PlayerHealth;
private var enemyHealth : EnemyHealth;
private var playerInRange : boolean;
private var timer : float;


function Awake ()
{
   
    player = GameObject.FindGameObjectWithTag ("MainCamera");
    playerHealth = player.GetComponent (PlayerHealth);
    enemyHealth = GetComponent(EnemyHealth);
    anim = GetComponent (Animator);
}


function OnTriggerEnter (other : Collider)
{
   
    if(other.gameObject == player) //player is within enemy's trigger collider
    {
        playerInRange = true;
    }
}


function OnTriggerExit (other : Collider)
{
    
    if(other.gameObject == player) // player is out of range
    {
       
        playerInRange = false;
        anim.SetTrigger("Walk"); // go back to walk animation
    }
}


function Update ()
{
    timer += Time.deltaTime;


    if(timer >= timeBetweenAttacks && playerInRange && enemyHealth.currentHealth > 0)
    {
        Attack ();
    }

    if(playerHealth.currentHealth <= 0)
    {
        anim.SetTrigger ("Dead");
    }
}


function Attack ()
{
    timer = 0f;
    anim.SetTrigger("Attack");

    if(playerHealth.currentHealth > 0)
    {
        playerHealth.TakeDamage (attackDamage);
    }
}