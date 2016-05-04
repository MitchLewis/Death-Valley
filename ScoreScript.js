static var score : int;
private var text : Text;

function Awake()
{
text = GetComponent(Text);

score = 0;
}

function Update()
{
	text.text = "Score: " + score;
}