var playerHealth : PlayerHealth;
var enemy : GameObject;
var spawnTime : float = 1f; //time between spawn
var spawnPoints : Transform[];


function Start ()
{
    
    InvokeRepeating ("Spawn", spawnTime, spawnTime); //call spawn after amount of time
}


function Spawn ()
{
    if(playerHealth.currentHealth <= 0f)
    {
        return;
    }

    var spawnPointIndex : int = Random.Range (0, spawnPoints.Length);

    Instantiate (enemy, spawnPoints[spawnPointIndex].position, spawnPoints[spawnPointIndex].rotation);
}