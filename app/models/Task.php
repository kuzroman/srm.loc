<?php

    class Task extends Eloquent {
        // protected $table = 'tasks';
        protected $fillable = array('title', 'complete', 'priority');
        public $timestamps = false;
    }