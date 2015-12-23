# <!-- 
# //    Adgala, Rohan Karthik    Account:  jadrn002
# //         CS545, Fall 2015
# //         Project #4
#  -->
# // <!-- Alan Riggins Lecture Notes -->
# /*  We load the global array proj4_data once, then use it as needed
#     to retrieve product information.
    
#     The Milk Chocolate handler is done the old-fashion way, with an 
#     'onclick' call in the xhtml code.  The rest of the buttons have 
#     handlers assigned the correct way.
    
#     Alan Riggins
#     CS545
#     Fall 2015
# */    
#!/usr/bin/perl 
#	Sample perl cgi script.  This script prints a list of the 
#	products in the opatija proj4.products table.
#
#	Code by Alan Riggins
#
   
use DBI;

print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Products in the jadran Database</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />

    
<style type="text/css">
html, body { background-color: #070; min-width: 900px;}
table { 
	margin-left: auto; margin-right: auto; clear: both;
	}
h1, h2 { 
    text-align: center; 
    color: #F22;
    background-color: #FCC;
    border: 5px double #C00;
    width: 600px;
    font-size: 300%;
    margin: 20px auto 20px auto;
    padding: 20px 0 20px 0;
    }
table{
    border: 5px double #C00; 
    width: 600px;
    font-size: 300%
    
}
td {	
	text-align: center; 
	color: #F22;
    background-color: #FCC;    
	
	}
    th {    
    text-align: center; 
    color: #000;
    background-color: #FCC;    
    
    }
img { float: left; 
    } 
#stocking {
    position: absolute;
    top: 35px;
    left: 35px;
    width: 100px;
    }  
#rudolph {
    float: right;
    position: relative;
    top: 0;
    right: 45px;
    width: 100px;
    }     
</style>
</head>
<body><div>
<img src="/~jadrn000/PROJ4_IMAGES/stocking.png" alt="Christmas stocking" id="stocking" />
<img src="/~jadrn000/PROJ4_IMAGES/rudolph.gif" alt="Rudolph" id="rudolph" />
<h1>Berthas Deluxe Candies</h1>

<table>
END_HTML

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn002";
my $username = "jadrn002";
my $password = "peach";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("select * from sales order by Date");
$sth->execute();

    print "\t<tr>\n";   
    print "<th>SKU</th><th>Quantities Sold</th></tr>";
    print "\t<tr>\n"; 
while(my @row=$sth->fetchrow_array()) {

    print "<td>$row[1]</td>";
    print "<td>$row[2]</td>";    
    print "\t</tr>\n";
    }
 

$sth->finish();
$dbh->disconnect();

    	

print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
