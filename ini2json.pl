#!/usr/bin/perl
use warnings;
use strict;

my $filesource = "/home/ahmed/Documents/git/Esperanto/Kurso de Esperanto/app/resources/ekzercoj/ekz04.dat";
my $filedestination = $filesource; 
$filedestination =~ s/.dat/.json/g;

if(open(my $fileS, "<:encoding(UTF-8)", $filesource) ){
	my @lines=<$fileS>;
	my $firstLine=shift(@lines);
	my $lastLine=pop(@lines);
	my $comma=0;
	$firstLine =~ s/\[/{"/g;
	$firstLine =~ s/\]/":{\n"/g;
	$firstLine =~s/\R\z//;
    $lastLine =~ s/"/'/g;
    $lastLine =~ s/=/":"/;
    $lastLine =~ s/\R\z//;
    $lastLine =~ s/\\'/'/g;
	$lastLine = "\",\n\"".$lastLine."\"\n}\n}";

	if(open(my $fileD, ">:encoding(UTF-8)", $filedestination) ){
		 print $fileD "$firstLine";
		foreach (@lines) {
			#print ($_."=>".length $_." ");
		  $_ =~s/\R\z//;
		  if($_ =~ m/^\[.*\]/){
		  		$_ =~ s/\[/"},"/g;
		  		$_ =~ s/\]/":{"/g;
		  		print $fileD "$_";
		  		$comma=0;
		  }else{
		  	  if(length $_ != 0 ){
				  $_ =~ s/"/'/g;
				  $_ =~ s/\\'/'/g;
				  $_ =~ s/=/":"/;
				  if($comma){
				  	print $fileD "\",\n\"";
				  }
				  print $fileD "$_";
				  
				  #print "$_\n";
				  $comma=1;
				}
			}
		};
		print $fileD "$lastLine";
	}else{
		warn "Could not open file '$filedestination' $!";
	}
}else{
	warn "Could not open file '$filesource' $!";
}
