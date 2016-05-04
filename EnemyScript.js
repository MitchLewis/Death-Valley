private var player : Transform;
private var playerHealth : PlayerHealth;
private var enemyHealth : EnemyHealth;
private var nav : NavMeshAgent;


function Awake ()
{
    
    player = GameObject.FindGameObjectWithTag ("MainCamera").transform;
    playerHealth = player.GetComponent (PlayerHealth);
    enemyHealth = GetComponent (EnemyHealth);
    nav = GetComponent (NavMeshAgent);
    anim = GetComponent (Animator);
}


function Update ()
{
    
   if(enemyHealth.currentHealth > 0 && playerHealth.currentHealth > 0) //if both player and enemy are alive
    {
        
        nav.SetDestination (player.position); //set the enemy to find the player
       
    }
   
  else
    {
       
       nav.enabled = false; //dont look for player or zombie is dead
    }
}