create table students (id text primary key, firstname text not null, lastname text not null);
-- create table events (id text primary key, name text not null, date text not null, time text not null, duration text not null);
create table signups(id text primary key, userId text not null, eventId text not null, signout text not null, signin text);
-- insert into students(id, firstname, lastname) values 
-- ("1", "Cameron", "Fryer"),
-- ("2","Dave","Kim"),
-- ("3", "Rex", "T"),
-- ("4","Ayin","something"),
-- ("5", "BigMan", "Ham");
-- insert into events(id, name,date,time,duration) values
-- ("1","Loring","October 3 1922","4:00","40 Minutes"),
-- ("2","gay bridge", "November 3 2021", "6:00", "90 Minutes"),
-- ("3", "dugouts", "November 12 2021", "7:45", "5 minutes");
-- insert into signups(id, userId, eventId, signout, signin) values
-- ("1", "1", "2", "4:00","3:00"),
-- ("2","2","2","2:00","2:00"),
-- ("3","3", "3", "7:43", "5:04"),
-- ("4","4","1", "3:00","6:00"),
-- ("5","5","2","5:00","6:00");
-- update students set firstname="popo", lastname="opop" where id=3
