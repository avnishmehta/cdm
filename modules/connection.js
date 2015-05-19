var XMPPConnection = Packages.org.jivesoftware.smack.XMPPConnection;
var Chat = Packages.org.jivesoftware.smack.Chat;
var ChatManagerListener = Packages.org.jivesoftware.smack.ChatManagerListener;
var MessageListener = Packages.org.jivesoftware.smack.MessageListener;
var ChatManager = Packages.org.jivesoftware.smack.ChatManager;
var XMPPException = Packages.org.jivesoftware.smack.XMPPException;
var Message = Packages.org.jivesoftware.smack.packet.Message;
var Roster = Packages.org.jivesoftware.smack.Roster;
var RosterEntry = Packages.org.jivesoftware.smack.RosterEntry;
var ConnectionConfiguration = Packages.org.jivesoftware.smack.ConnectionConfiguration;
var Presence = Packages.org.jivesoftware.smack.packet.Presence;



var config = new ConnectionConfiguration("10.30.25.133",5222);
config.setCompressionEnabled(true);
config.setSASLAuthenticationEnabled(true);
var connection = new XMPPConnection("10.30.25.133");
connection.connect();
connection.login("admin","admin");
var presencePacket = new Presence(Presence.Type.available);
presencePacket.setTo("admin@localhost.localdomain");


/*var chatmanager = connection.getChatManager();
var chat = chatmanager.createChat("user1@hanumantb", new MessageListener() {});
chat.sendMessage("Hello Boy");



/*var connection = new XMPPConnection("10.30.25.135");
connection.connect();
connection.login("admin", "suselinux");
var chat = connection.createChat("jj@10.30.25.135");
chat.sendMessage("Hi Tom!");*/




/*var connection = new XMPPConnection("10.30.25.135");  connection.connect();   connection.login("admin", "suselinux");      var message = new Message();     message.setTo("jj@10.30.25.135");     message.setSubject("Server down");     message.setBody("The 'jupiter' server has just gone down");     message.setType(Message.Type.HEADLINE);     connection.sendPacket(message);     connection.close();*/

