<?php

/**
 * Test class for WSWrapperFactory.
 * Generated by PHPUnit on 2012-06-13 at 09:47:17.
 * @group WebServices
 */
class WSWrapperFactoryTest extends PHPUnit_Framework_TestCase {

    /**
     * @var WSWrapperFactory
     */
    protected $factory;

    /**
     * Sets up the fixture, for example, opens a network connection.
     * This method is called before a test is executed.
     */
    protected function setUp() {
        $this->factory = new WSWrapperFactory;
    }

    /**
     * Tears down the fixture, for example, closes a network connection.
     * This method is called after a test is executed.
     */
    protected function tearDown() {
        
    }

    /**
     * @covers WSWrapperFactory::create
     */
    public function testCreate() {
        $this->assertNull($this->factory->create(new WSRequestParameters()));
    }

}

