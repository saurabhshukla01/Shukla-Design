<?php

/**
 * AddonTable
 * 
 * This class has been auto-generated by the Doctrine ORM Framework
 */
class AddonTable extends PluginAddonTable
{
    /**
     * Returns an instance of this class.
     *
     * @return AddonTable The table instance
     */
    public static function getInstance()
    {
        return Doctrine_Core::getTable('Addon');
    }
}