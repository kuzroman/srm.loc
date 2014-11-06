<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuyersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        // http://laravel.com/docs/4.2/schema#adding-columns
        Schema::create('buyers', function($table) {
            $table->increments('id');
            $table->string('name');
            $table->enum('kind', array('покупатель', 'поставщик')); // тип данных enum
            $table->string('email');
            $table->timestamps(); // вроде как обязательное поле для всех миграций!
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        Schema::drop('buyers');
	}

}
