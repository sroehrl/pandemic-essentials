<?php
/* Generated by neoan3-cli */

namespace Neoan3\Components;

use Neoan3\Core\Unicore;

class Footer extends Unicore
{
    function init()
    {
        $this->uni('pe')->hook('main','footer')->output();
    }

}
