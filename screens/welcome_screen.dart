import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class WelcomeScreen extends StatefulWidget {
  @override
  _WelcomeScreenState createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeAnimation;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: Duration(seconds: 1));
    _fadeAnimation = CurvedAnimation(parent: _controller, curve: Curves.easeIn);
    _controller.forward();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset("assets/townly-bg.jpg", fit: BoxFit.cover),
          Container(color: Colors.black.withOpacity(0.6)),
          Center(
            child: FadeTransition(
              opacity: _fadeAnimation,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text("Welcome to Townly!", style: TextStyle(fontSize: 30, fontWeight: FontWeight.bold, color: Colors.white)),
                  SizedBox(height: 20),
                  ElevatedButton(
                    onPressed: () => context.go('/loginSelection'),
                    style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                    child: Text("Get Started", style: TextStyle(color: Colors.white, fontSize: 18)),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
