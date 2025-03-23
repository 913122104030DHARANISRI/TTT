import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CustomerLoginScreen extends StatelessWidget {
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Padding(
          padding: EdgeInsets.all(20),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text("Customer Login", style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
              TextField(controller: emailController, decoration: InputDecoration(labelText: "Email")),
              TextField(controller: passwordController, decoration: InputDecoration(labelText: "Password"), obscureText: true),
              SizedBox(height: 20),
              ElevatedButton(
                onPressed: () => context.go('/customerDashboard'),
                child: Text("Login"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
