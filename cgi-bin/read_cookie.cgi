#  <!-- 
# //    Adgala, Rohan Karthik    Account:  jadrn002
# //         CS545, Fall 2015
# //         Project #4
#  -->
# <!-- Alan Riggins Lecture Notes -->
#Reference:http://www.tutorialspoint.com/perl/perl_date_time.htm

#!/usr/bin/perl  



use CGI;
use CGI::Cookie;
use DBI;
use POSIX qw(strftime);

$q = new CGI;


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn002',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <title>Berthas Deluxe Chocolates</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta http-equiv="Content-Style-Type" content="text/css" />
    <link rel="stylesheet" type="text/css" href="http://jadran.sdsu.edu/~jadrn002/proj4/index.css" />
</head>
<body>
  <div class="container"> 
        <div class="header">
            <div class="banner">               
                <h1>Berthas Deluxe Chocolates</h1> 
                <h3 id="caption">-- Your online Chocolate &amp; Confectionery Store.</h3>
            </div>  
            <div class="menubar">           
                <ul id="menuitems">           
                  <li ><a href="http://jadran.sdsu.edu/~jadrn002/proj4/index.html">Home</a></li>
                  <li ><a href="http://jadran.sdsu.edu/~jadrn002/proj4/products.html">Products</a></li> 
                  <li ><a href="http://jadran.sdsu.edu/~jadrn002/proj4/orders.html">Order Online</a></li>
                  <li ><a href="http://jadran.sdsu.edu/~jadrn002/proj4/about.html">About Us</a></li> 
                  <li ><a href="http://jadran.sdsu.edu/~jadrn002/proj4/contact.html">Contact Us</a></li>          
            </div>             
        </div>
   
        <div>
        <h1>Dear Customer,Your order has been placed successfully.</h1>            
END_CONTENT
my %cookies = $ENV{COOKIE};
for( keys %cookies) {
}

print "<div id='sitescontent'><table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
    }
    
my $v = $q->cookie('jadrn002');
@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);

    my $host = "opatija.sdsu.edu";
    my $port = "3306";
    my $database = "jadrn002";
    my $username = "jadrn002";
    my $password = "peach";
    my $database_source = "dbi:mysql:$database:$host:$port";

        
    my $dbh = DBI->connect($database_source, $username, $password) 
    or die 'Cannot connect to db';

    $dateValue = strftime "%Y-%m-%d", localtime;

    my $query = "INSERT into sales values('$dateValue','$sku', '$qty'); "; 

    my $count = $dbh->do($query);   
    $dbh->disconnect();
    } 
     
print "<h1>Your Order Info...</h1>\n";
my ($key, $value);
 print "<tr>\n";
 print "<th>Attributes</th>\n";
 print "<th>Info Received..</th>\n";
 print "</tr>\n";
                
foreach $key ($q->param) {
    print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
        print "<td>$value</td>\n";
        }
    print "</tr>\n";
}

print "</table>\n";
print "</div>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";