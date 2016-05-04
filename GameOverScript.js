var playerHealth : PlayerHealth;
var restartLevel : float = 5f;


private var anim : Animator;
private var restartTimer : float;


function Awake ()
{
    anim = GetComponent (Animator);
}


function Update ()
{
    if(playerHealth.currentHealth <= 0)
    {
        anim.SetTrigger ("GameOver");

        restartTimer += Time.deltaTime;

        if(restartTimer >= restartLevel)
        {
            Application.LoadLevel(Application.loadedLevel);
        }
    }
}