<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // http://laravel.com/docs/4.2/schema#adding-columns
        Schema::create('orders', function($table) {
            $table->increments('id');
            $table->date('created'); // дата создания
            $table->string('buyer');
            $table->text('desc');
            $table->boolean('cash'); // безнал
            $table->string('price');
            $table->boolean('paid'); // оплачено
            $table->date('completion'); // дата завершения
            $table->boolean('finished'); // сдано
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
        Schema::drop('orders');
    }

}