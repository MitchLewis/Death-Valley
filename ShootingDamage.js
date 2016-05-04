var shotDamage : int =50;
var timeBetweenShots : float = 0.15f;
var range : float = 100f;

private var timer: float;
private var shootRay : Ray;
private var shootHit : RaycastHit;
private var shootableMask : int;
private var gunParticles : ParticleSystem;
private var gunLine : LineRenderer;
private var gunLight : Light;
private var effectsDisplayTime : float = 0.2f;

function Awake()
{
	shootableMask = LayerMask.GetMask ("Shootable");

	gunParticles = GetComponent (ParticleSystem);
	gunLine = GetComponent (LineRenderer);
	gunLight = GetComponent (Light);
}

function Update () {

	timer += Time.deltaTime;

if(Input.GetButtonDown("Fire1") && timer >= timeBetweenShots)
{
	timer = 0f;


	gunLight.enabled = true;
	gunParticles.Stop();
	gunParticles.Play();

	gunLine.enabled = true;
	gunLine.SetPosition (0, transform.position);

	shootRay.origin = transform.position;
	shootRay.direction = transform.forward;

	if(Physics.Raycast (shootRay, shootHit, range, shootableMask))
	{
		var enemyHealth : EnemyHealth = shootHit.collider.GetComponent(EnemyHealth);

		if(enemyHealth != null) //actually hit something that is an enemy
		{
		enemyHealth.TakeDamage (shotDamage);
		}

		gunLine.SetPosition (1, shootHit.point);
	}

	else
	{
		gunLine.SetPosition(1, shootRay.origin + shootRay.direction * range);

	}
		
}

if(timer >= timeBetweenShots * effectsDisplayTime)
{
	gunLine.enabled = false;
	gunLight.enabled = false;
}

}

public function DisableEffects()
{
	gunLine.enabled = false;
	gunLight.enabled = false;
}