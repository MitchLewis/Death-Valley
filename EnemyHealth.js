var startingHealth : int = 100;
var currentHealth : int;
var scoreValue : int = 10;


private var anim : Animator;
private var capsuleCollider : CapsuleCollider;
private var isDead : boolean;

function Awake ()
{
    anim = GetComponent (Animator);
    hitParticles = GetComponentInChildren (ParticleSystem);
    capsuleCollider = GetComponent (CapsuleCollider);

    currentHealth = startingHealth;
}



public function TakeDamage (amount : int)
{
    if(isDead)
        return;
      

    currentHealth -= amount;


    if(currentHealth <= 0)
    {
        Death ();
    }
}

function Death ()
{
    isDead = true;

   
    capsuleCollider.isTrigger = true;

    anim.SetTrigger ("Dead");

    ScoreScript.score +=scoreValue;

    Destroy (gameObject, 2f);
 
}
