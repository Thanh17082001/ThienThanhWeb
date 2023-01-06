<?php
use League\Plates\Engine;
class Controller
{
    private $templates;

    public function __construct()
	{
		$this->templates = new Engine(dirname(__DIR__,2) . '/views');
	}

    // Render a template directly
    public function sendPage($page, array $data = [])
	{
		exit($this->templates->render($page, $data));
	}

	function redirect($location, $permanent)
	{

		header('Location: ' . $location, true, $permanent ? 301 : 302);
		exit();
	}

}